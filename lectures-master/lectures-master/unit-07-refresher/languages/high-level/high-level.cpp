#include <iostream>
#include <string>
using namespace std;

int countTwos(int num) {
  int count = 0;
  string str = to_string(count);
  for (int i = 2; i <= num; i++) {
    string subStr = to_string(i);
    string::iterator it;
    for (it = subStr.begin(); it < subStr.end(); it++) {
      if (*it == '2') {
        count++;
      }
    }
  }
  return count;
}

int main(int argc, char ** argv) {
  cout << countTwos(100) << endl;
}

// 435 characters typed (not including comment)
