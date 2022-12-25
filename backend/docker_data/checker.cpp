#include <bits/stdc++.h>
#define ll long long

using namespace std;

int main(int argc, char **argv)
{
	ios::sync_with_stdio(false);
	cin.tie(0);


    int caseNum = strtol(argv[2],nullptr,10);
    ifstream cases;
    cases.open("test_cases.txt");


    int n = 100;//rand()%1000;
    int x = rand()%n+1;
    int sol = 10;

    int tmp;
    cases>>tmp;
    for(int i=0;i<=caseNum;i++)
        cases>>n>>x>>sol;

    char s[50] = "output/output";
    char s2[10] = ".txt";
    strcat(s,argv[1]);
    strcat(s,s2);
    ofstream outfile;
    outfile.open(s,ios_base::app);


    char s3[50] = "output/log";
    char s4[10] = ".txt";
    strcat(s3,argv[1]);
    strcat(s3,s4);
    ofstream logfile;
    logfile.open(s3,ios_base::app);

    logfile<<n<<" "<<x<<" "<<sol<<endl;

    char c;
    int t;
    int cnt = 0;
    int miss = 0;
    cout<<n<<endl;
    while(1)
    {
        cin>>c;
        cin>>t;
        cnt++;
        logfile<<c<<" "<<t<<endl;
        //cout<<c<<" "<<t<<endl;
        if(c=='!')
        {
            if(t==x)
                outfile<<(cnt-1<=sol?1:0)<<endl;
            else
                outfile<<0<<endl;
            outfile.close();
            return 0;
        }
        else if(c == '?')
        {
            /*if(miss==2)
            {
                outfile<<0<<endl;
                logfile<<"no more"<<endl;
                outfile.close();
                return 0;
            }*/
            if(t>=x)
            {
                cout<<1<<endl;
                logfile<<1<<endl;
                miss++;
            }
            else
            {
                cout<<0<<endl;
                logfile<<0<<endl;
            }
        }
    }


	return 0;
}
