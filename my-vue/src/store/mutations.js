const mutations = {
         getcargoods(state,good){
               state.cargoods = state.cargoods.concat(good)
               console.log(state.cargoods)
         },
         addcargoods(state,{id,price,desc,type,url}){
             let goodinfo = {};
             goodinfo.id=id;
             goodinfo.price=price;
             goodinfo.desc = desc;
             goodinfo.url = url;
             console.log(state.cargoods)
             if(state.cargoods.length==0){
                goodinfo.num = 1
                state.cargoods.push(goodinfo)
                localStorage.cargoods=state.cargoods
             }else{
                let length = state.cargoods.length
                var show = true
                for(var i = 0 ; i< length;i++){
                    
                    
                    if(state.cargoods[i].id==id){
                        if(type==1){
                            state.cargoods[i].num++
                            localStorage.cargoods = JSON.stringify(state.cargoods)
                            //console.log(localStorage.cargoods)
                            //var show = false;
                            //return show
                        }else{
                            //state.cargoods[i].num--
                            if(state.cargoods[i].num>1){
                                state.cargoods[i].num-- 
                                localStorage.cargoods = JSON.stringify(state.cargoods)
                            }else{
                                state.cargoods.splice(i,1)
                                localStorage.cargoods = JSON.stringify(state.cargoods)
                                //var show = false;
                                //return show
                            }
                            
                        }
                        //state.cargoods[i].num++
                       var show = false;
                        return show
                    }
                        
                        
                   
                }
                if(show){
                    goodinfo.num = 1
                    state.cargoods.push(goodinfo)
                    localStorage.cargoods = JSON.stringify(state.cargoods)
                }
            
            }
                        
                    
                    
                    
            
            }}

export default mutations