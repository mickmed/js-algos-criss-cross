// your function has an input that is a two dimensional array, containing three arrays with three numbers in each

//for eg:
// [[1,2,3], 
//  [4,5,6], 
//  [7,8,9]]

//Add together each kitty corner, i.e., 1 + 9 = 10 and 3 + 7 = 10
//Return the difference 10 - 10 = 0


const crissCross = (arr) => {
    let sum1 = 0
    let sum2 = 0
    for(let i=0; i<arr.length; i++){
        sum1 += arr[i][i]
         sum2 +=arr[i][arr.length-1 - i]    
    }

    return Math.abs(sum1 - sum2)

}






module.exports = {
    crissCross
}