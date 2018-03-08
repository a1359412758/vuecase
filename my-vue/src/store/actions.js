import axios from 'axios'
const actions={

    getcargoods(store){
        setTimeout(()=>{
            let good = [];
             store.commit('getcargoods',good)
        },100)
    },
    addcargoods(store,{id,price,desc,type}){
       
        setTimeout(()=>{
             store.commit('addcargoods',{id,price,desc,type})
        },100)
    }
}
export default actions