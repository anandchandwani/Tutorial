casper.test.begin('test the UI', 20, function(test) {

  phantom.addCookie({
    name: 'token',
    value: 'corn',
    domain: 'localhost'
  });

  // casper.on('remote.message', function(message) {
  //   this.echo(message);
  // });

  casper.on("page.error", function(msg, trace) {
    this.echo("Error: " + msg, "ERROR");
  });

  casper.start('http://localhost:8080/');

  casper.then(function() {
    casper.waitWhileSelector('#loading', function() {
      test.assertElementCount('.panel-default', 2, 'should be two people applied');
      this.click('a[data-status=emailed]');
      casper.waitWhileSelectorCount('.panel-default', 2, function() {
        test.assertElementCount('.panel-default', 1, 'one of them should have switched to "emailed"');
      });
    });
  });

  casper.then(function() {
    this.click('nav a[href="#/apps/emailed"]');
    casper.waitForUrl('http://localhost:8080/#/apps/emailed', function() {
      test.assertElementCount('.panel-default', 3, 'check "emailed" to make sure that one was added');
      this.click('a[data-status=accept]');
      casper.waitWhileSelectorCount('.panel-default', 3, function() {
        test.assertElementCount('.panel-default', 2, 'accept one');
      });
    });
  });

  casper.then(function() {
    this.click('nav a[href="#/apps/accept"]');
    casper.waitForUrl('http://localhost:8080/#/apps/accept', function() {
      test.assertElementCount('.panel-success', 3, 'make sure 3 are accepted');
      this.click('a.soft');
      casper.waitWhileSelectorCount('.panel-success', 3, function() {
        test.assertElementCount('.panel-success', 2, 'soft reject someone');
      });
    });
  });

  casper.then(function() {
    this.click('nav a[href="#/apps/applied"]');
    casper.waitForUrl('http://localhost:8080/#/apps/applied', function() {
      test.assertElementCount('.panel-default', 1, 'one should still be "applied" as default color');
      test.assertElementCount('.panel-warning', 1, 'the other should be "applied" as yellow since being soft rejected');
    });
  });

  casper.then(function() {
    test.assertElementCount('.panel', 2, 'so there are two total');
    this.click('a.delete');
    this.click('a[data-apply=confirmation]');
    casper.waitWhileSelectorCount('.panel', 2, function() {
      test.assertElementCount('.panel', 1, 'and now one should be deleted');
    });
  });

  casper.then(function() {
    //should show details for one applicant
    this.click('.name');
    casper.waitForText('applied', function() {
      test.assertTextExists('_id', 'make sure applicant details are shown , particularly the _id');
    });
  });

  casper.then(function() {
    this.click('a[href="#/pendings"]');
    casper.waitForText('Pending attempts', function() {
      test.assertElementCount('.list-group-item', 6, 'see there are 6 incomplete apps');
      test.assertElementCount('.glyphicon-ok', 4, '4 should show completion');
    });
  });

  casper.then(function() {
    this.click('a.delete');
    this.click('a[data-apply=confirmation]');
    casper.waitWhileSelectorCount('.list-group-item', 6, function() {
      test.assertElementCount('.list-group-item', 5, 'now there are 5 after deleting one');
    });
  });

  casper.then(function() {
    this.click('a[href="#/apps/booked"]');
    casper.waitForText('Applicants', function() {
      test.assertElementCount('.panel-default', 2, 'there should still be two "applied"');
      this.click('a.archive');
      this.click('a[data-apply=confirmation]');
      casper.waitWhileSelectorCount('.panel-default', 2, function() {
        this.click('a[href="#/archive"]');
        test.assertElementCount('.panel-default', 1, 'check that it was archived');
      });
    });
  });

  casper.then(function() {
    this.click('a[href="#/users"]');
    casper.waitForText('Users', function() {
      test.assertTextExists('azai91', 'find User azai91');
      this.click('.name');
      casper.waitForText('github_login', function() {
        this.click('a[href^="#/app/"]');
        test.assertElementCount('.list-group-item.apps a', 2, 'look for associations');
        casper.waitForText('passion', function() {
          test.assertTextExists('azai91@gmail.com', 'make sure we can see his application through associations');
          this.click('h4 a[href="#/apps/reject"]');
        });
      });
    });
  });

  casper.then(function() {
    casper.waitForText('Applicants', function() {
      //delete the applications
      this.click('a.delete');
      this.click('a[data-apply=confirmation]');
      casper.waitWhileSelectorCount('a.delete', 2, function() {
        this.click('a.delete');
        this.click('a[data-apply=confirmation]');
        casper.waitWhileSelectorCount('a.delete', 1, function() {
          this.click('a[href="#/users"]');
        });
      });
    });
  });

  casper.then(function() {
    this.click('.name');
    casper.waitForText('github_login', function() {
      casper.reload(function() {
        test.assertElementCount('.list-group-item.apps a', 0, 'associations should be gone after deleting those apps');
      });
    });
  });

  casper.run(function() {
    test.done();
  });

});

casper.waitWhileSelectorCount = function(selector, count, then) {
  casper.waitFor(function() {
    return this.evaluate(function(selector, count) {
      return document.querySelectorAll(selector).length !== count;
    }, selector, count);
  }, then);
}

casper.test.on('fail', function(failure) {
  console.error(casper.getCurrentUrl());
  casper.capture('screen.png');
});
