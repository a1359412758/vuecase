const mutations = {
         getcargoods(state,good){
               state.cargoods = state.cargoods.concat(good)
         },
         addcargoods(state,{id,price,desc,type}){
             let goodinfo = {};
             goodinfo.id=id;
             goodinfo.price=price;
             goodinfo.desc = desc;
             console.log(state.cargoods)
             if(state.cargoods.length==0){
                goodinfo.num = 1
                state.cargoods.push(goodinfo)
             }else{
                let length = state.cargoods.length
                var show = true
                for(var i = 0 ; i< length;i++){
                    
                    if(state.cargoods[i].id==id){
                        state.cargoods[i].num++
                       var show = false;
                        return show
                    }
                        
                        
                   
                }
                if(show){
                    goodinfo.num = 1
                    state.cargoods.push(goodinfo)
                }
            
            }
                        
                    
                    
                    
            
            }}

export default mutations