import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types'
import { fetchBundleData} from '../../reducers/users/users.reducer'

const Detail =props=>{
    const {usersReducer,getBundleData} =props;
    let currentUserInfo= {};
    let getResultSuccess=false;
    useEffect(()=>{
        if(!getResultSuccess){
            getBundleData();
        }
    },[getResultSuccess])
    if(usersReducer !==undefined && usersReducer.bundle !==undefined && usersReducer.bundle.length >0){
        getResultSuccess=true;
        currentUserInfo=usersReducer.bundle[0].entry[0].resource;
        console.log('info', currentUserInfo);
    }
    function patientDetails(){
       
        let providerList=currentUserInfo.careProvider.map(provider=>{
            return (<><p>{provider.display}</p></>);
        });
        let name=currentUserInfo.name.map(item=>{
            if(item.use ==='official'){
                return (<><p>{item.text}</p></>);
            }        
        });
        let telecom=currentUserInfo.telecom.map(item=>{
                return (<><p>{item.use}, {item.system}, {item.value}</p></>);
            });  
        let contact=currentUserInfo.contact.map(contact=>{
           return (<><p>{contact.name.text}</p><p>{contact.address.text}</p><p>{contact.gender}, {contact.relationship[0].text}</p></>);
        });

        return(
            <div className="container">
                <h3 className="center">Patient Info</h3>
                Name: {name}
                Administrative Gender:  <p>  {currentUserInfo.gender}</p>
                Birth Date:   <p>  {currentUserInfo.birthDate}</p>
                Marital Status:  <p>  {currentUserInfo.maritalStatus.text}</p>
                Home Address:  <p>  {currentUserInfo.address[0].text}</p>
                Telephone|Email: {telecom}
                Status:  <p>  {currentUserInfo.active? 'Active': 'Inactive'}</p>
                Contact: {contact}
                Providers: {providerList}
                {/* Text:  <p>  {currentUserInfo.text.div}</p> */}
            </div>
        )
    }
    return getResultSuccess && patientDetails();

}
Detail.defaltProps={};
Detail.propTypes={
    getBundleData: PropTypes.func.isRequired
}
const mapStateToProps = state=>({
      usersReducer: state.mainReducer.usersReducer
  })
const mapDispatchToProps= dispatch => ({
    getBundleData: () => dispatch(fetchBundleData())
});
// function mapDispatchToProps (dispatch){
//     return {
//         getBundleData: () => dispatch(fetchBundleData())
//     };
// }

export default connect(mapStateToProps,mapDispatchToProps)(Detail)