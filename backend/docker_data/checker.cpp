#include <bits/stdc++.h>
#define ll long long

using namespace std;

int main(int argc, char **argv)
{
	ios::sync_with_stdio(false);
	cin.tie(0);


    char s[50] = "output/output";
    char s2[10] = ".txt";
    strcat(s,argv[1]);
    strcat(s,s2);
    ofstream outfile;
    outfile.open(s);

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
