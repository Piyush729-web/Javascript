const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//  marvel.push(dc)
//  console.log(marvel)
//  console.log(marvel[3][1])
 const all=marvel.concat(dc)
 console.log(all);
 const alln=[...marvel, ...dc]
 console.log(alln);
 const newarr=[1,1,1,[2,2,3],[1,2,3,4]]
 const n=newarr.flat(Infinity)
 console.log(n);
 
 
 
 