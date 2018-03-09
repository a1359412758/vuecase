import axios from 'axios'
const actions={

    getcargoods(store){
        setTimeout(()=>{
            
             store.commit('getcargoods',JSON.parse(localStorage.cargoods))
        },100)
    },
    addcargoods(store,{id,price,desc,type,url}){
       
        setTimeout(()=>{
             store.commit('addcargoods',{id,price,desc,type,url})
        },100)
    }
}
export default actions