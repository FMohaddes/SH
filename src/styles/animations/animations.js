export const PageAnimation = {
     hidden : {
          
          opacity : 0.9 ,
     } ,
     show   : {
          opacity    : 1 ,
          transition : {
               duration : 1 ,
               ease: [0.83, 0, 0.17, 1],
               when:"beforeChildren",
               staggerChildren:0.25,
          } ,
          
     },
     
     exit   : {
          opacity    : .9 ,
          transition : {
               duration : .5 ,
               ease: [0.83, 0, 0.17, 1]
          } ,
     },
     
     
}




export const HeaderText={
     hidden:{y:370},
     show:{y:0,
          transition : {
               duration : .55 ,
               ease: "easeOut",
          } ,
     }
}
