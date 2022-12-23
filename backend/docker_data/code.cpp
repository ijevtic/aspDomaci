#include <bits/stdc++.h>
#define ll long long
using namespace std;
int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);

	int n;
	cin>>n;
	int l = 0;
	int r = n;
	//cout<<"! 123"<<endl;
	while(l<r)
    {
        int mid = (l+r)/2;
        cout<<"? "<<mid<<endl;
        int t;
        cin>>t;
        if(t==1)
            r = mid;
        else
            l = mid+1;
    }
    cout<<"! "<<l<<endl;


	return 0;
}
