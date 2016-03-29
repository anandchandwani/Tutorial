#include <iostream>
using namespace std;

int add(int a, int b) {
 int sum = a + b;
 return sum;
}

string add(string a, string b) {
 string sum = a + b;
 return sum;
}

// template <class T>
// T add(T a, T b) {
//   return a + b;
// }

int main(int argc, char ** argv) {
  cout << add(1, 2) << endl;

  string first = "andy";
  string last = "carlson";
  cout << add(first, last) << endl;
  return 0;
}
