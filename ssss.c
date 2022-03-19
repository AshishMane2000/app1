#include<stdio.h>
#include<stdlib.h>
int * reverse(int a[],int len){
    int *arr=(int *)malloc(sizeof(int)*len);
    int i=0;int j=len-1;
    while(i<len){
        arr[i]=a[j];
        i++;
        j--;
    }
  return arr;
}

int main(){
    // printf("Ashish mane ");
    int a[]={9,3,5,1};
   int res[]=reverse(a,4);
   for(int i=0;i<4;i++){
       printf("%d ",res[i]);
   }
    
    return 0;
}