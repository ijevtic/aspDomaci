#include <bits/stdc++.h>
#define ll long long

using namespace std;

bool veceJednako(string a, string b)
{
    if(a.size()>b.size())
        return true;
    if(a.size()<b.size())
        return false;
    for(int i=0;i<a.size();i++)
        if(a[i]!=b[i])
            return a[i]>b[i];
    return true;
}

int main(int argc, char **argv)
{
	ios::sync_with_stdio(false);
	cin.tie(0);

    int caseNum = strtol(argv[2],nullptr,10);
    ifstream cases;
    cases.open("test_cases_subtask4.txt");

    string x;
    int tmp;
    int sol;
    cases>>tmp;
    for(int i=0;i<=caseNum;i++)
    {
        cases>>x;
        cases>>sol;
    }
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

    logfile<<x<<" "<<sol<<endl;

    char c;
    string t;
    int cnt = 0;
    int miss = 0;
    while(1)
    {
        cin>>c;
        cin>>t;
        cnt++;
        // logfile<<c<<" "<<t<<endl;
        //cout<<c<<" "<<t<<endl;
        if(c=='!')
        {
            logfile<<"user "<<cnt-1<<" "<<sol<<endl;
            if(t==x)
                outfile<<(cnt-1<=sol?1:0)<<endl;
            else
                outfile<<0<<endl;
            outfile.close();
            return 0;
        }
        else if(c == '?')
        {
            if(veceJednako(t,x))
            {
                cout<<1<<endl;
                // logfile<<1<<endl;
                miss++;
            }
            else
            {
                cout<<0<<endl;
                // logfile<<0<<endl;
            }
        }
    }


	return 0;
}
