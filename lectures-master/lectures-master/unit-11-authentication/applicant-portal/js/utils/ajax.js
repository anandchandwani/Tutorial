function $post(url, data) {
  return $.ajax({
    url,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data)
  });
}

function $delete(url, data) {
  return $.ajax({
    url,
    type: 'DELETE',
    contentType: 'application/json',
    data: JSON.stringify(data)
  });
}

function $put(url, data) {
  return $.ajax({
    url,
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify(data)
  });
}

module.exports = {
  $post, $delete, $put
};