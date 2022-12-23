#include <bits/stdc++.h>
#define ll long long

using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);

    ofstream outfile;
    outfile.open("output/output.txt");

    int n = 100;//rand()%1000;
    int x = rand()%n+1;
    char c;
    int t;
    int cnt = 0;
    cout<<n<<endl;
    while(1)
    {
        cin>>c;
        cin>>t;
        cnt++;
        outfile<<c<<" "<<t<<endl;
        //cout<<c<<" "<<t<<endl;
        if(c=='!')
        {
            if(t==x)
                outfile<<cnt-1;
            else
                outfile<<-1;
            outfile.close();
            return 0;
        }
        else if(c == '?')
        {
            if(t>=x)
                cout<<1<<endl;
            else
                cout<<0<<endl;
        }
    }


	return 0;
}
