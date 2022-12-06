import {StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { Colors } from '../constants/Colors';
const {width, height} = Dimensions.get('window');
const STATUSBAR_HEIGHT = StatusBar.currentHeight;


export default  styles = StyleSheet.create({
    statusBar: {
        height: Platform.OS == 'ios'? 70:STATUSBAR_HEIGHT,
      },
      statusBar2: {
        height: 0
      },
      appBar: {
        backgroundColor:'#79B45D',
        height: STATUSBAR_HEIGHT -50,
     },
     is_img:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
     },
     page_container:{
      flex: 1,
     },
    screen_container:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'space-between'
    },
    screen_container_detail:{
      flex: 1,
      flexDirection:'column',

  },
    screen_top:{
       flex:.9,
    },
    screen_bottom:{
      flex:.1,
      width:'100%',
      flexDirection:'row',
      justifyContent:'center',
   },
   bottom_btn:{
      height: 40,
      width: 80,
      borderRadius: 50,
      backgroundColor: 'blue',
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center'
   },
   bottom_btn_text:{
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
    fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
  },
    user_container:{
      width:'100%',
      flexDirection:'row',
      marginBottom: 40,
  },  
    user_wrapper:{
        width:'50%',
        height: 200,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginTop: 20,
    },  
    remove_btn:{
      width: '100%',  
      flexDirection:'row',
      justifyContent:'flex-end',
      marginRight: 0,
      marginBottom: -35,
      position: 'absolute',
      zIndex:10
    },
    remove_btn_text:{
      color: Colors.red,
      fontSize: 28,
      fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
      fontWeight: '600',
    },
    
    content_wrapper:{
      width:'100%',
      marginTop:-20,
      justifyContent:'center',
      flexDirection:'row',
      backgroundColor:'#e5e6e6',
      paddingVertical:10,

    },
    content_text:{
      fontSize: 20,
      fontWeight: '600',
      color: '#ffffff',
      fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
    },
    detail_header:{
      width:'100%',
      marginBottom: 0,
      flexDirection:'row',
      justifyContent:'flex-start',
      marginTop: 50,
      paddingHorizontal: 20,
    },
    detail_img:{
      width:'100%',
      height: 200,
    },
    user_detail:{
      width:'100%',
      paddingHorizontal:'10%',
      flexDirection:'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    user_detail_text:{
      fontSize: 16,
      fontWeight: '400',
      fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
    },
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      width: '90%',
      marginTop: 50,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonSubmit: {
      backgroundColor: "#2196F3",
    },
    buttonClose: {
      backgroundColor: "#F194FF",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    form_group:{
      width:'100%',
      paddingHorizontal:'4%',
      marginTop: 10
  },
  label:{
    fontSize: 14,
    fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
    color:Colors.white, 
    fontWeight: '600',
    marginLeft: 2,
  },
  form_input_type_2_wrap:{
    flexDirection: 'row',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginTop: 5,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: Colors.gray,
  },
  form_input_type_2_wrap2:{
    flexDirection: 'row',
    borderColor: Colors.lightgray,
    borderWidth: 1.2,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 6,
    overflow: 'hidden',
  },

  form_input_type_2:{
    color: Colors.neutral,
    fontSize: 12,
    fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
    fontWeight: '400',
    
    flex: .95,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  form_input_type_2_icon:{
    marginTop: 10,
    width:30,
    height: 30,
  },
  
  icon_andat:{
    width: 20,
    height: 20,
  },
  form_input_type_3:{
    color: Colors.neutral,
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
    fontWeight: '400',
    
    flex: .9,
    paddingHorizontal: 10,
    paddingBottom: 14,
    paddingTop: 14,
    borderRadius: 6,
    overflow: 'hidden',
  },
  form_input_type_33:{
    color: Colors.neutral,
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
    fontWeight: '400',
    
    flex: .9,
    paddingHorizontal: 10,
    paddingBottom: 14,
    paddingTop: 12.5,
    borderRadius: 6,
    overflow: 'hidden',
  },
  
  form_input_type_44:{
    color: Colors.neutral,
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? 'Helvetica': 'Roboto',
    fontWeight: '400',
    flex: .9,
    paddingHorizontal: 10,
    paddingBottom: 14,
    paddingTop: 12.5,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#E5E7EB'
  },
  
})
