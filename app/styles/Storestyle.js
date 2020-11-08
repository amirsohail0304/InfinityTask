import {StyleSheet} from 'react-native';
export const storeStyle = StyleSheet.create({
   
      mainContainer: {
        backgroundColor: '#EAF1F9', 
        flex: 1, 
        // justifyContent: 'space-around' 
      }, 
      headerContainer:{
        flexDirection: 'row',
        paddingTop: 50,
        backgroundColor: '#054AA5',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10,  
      },
      headerText:{
        textTransform: "uppercase",
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
      },
      catagoriesMainContainer:{
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        height: 150,
      },
      catagoriesContainer:{
        flexDirection: 'row' ,
        justifyContent: 'space-between',
        paddingTop: 15,
      },
      catagoriesText:{
        color: '#000000',
        fontSize: 12,
        fontWeight: 'bold',
      },
      storeDetail:{
      paddingHorizontal: 15,
      },
      productTextContainer:{
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 10,
      },
      productText:{
        color: '#000000',
        fontSize: 12,
        fontWeight: 'bold'
      },
      viewText:{
        color: '#99A0B0',
        fontSize: 12,
        fontWeight: 'bold'
      },
      backgroundImage: {
        height: 90,
        width:115,
        overflow: 'hidden',
        borderRadius: 5,
       },
       bgImageContainer:{
         flexDirection: 'row',
         justifyContent: 'space-between'
       },
       imagesSpace:{
          padding: 5,
       },
       backgroundImageIneer:{
        justifyContent: 'space-between',
        padding: 5,
    },
    productText: {
      // fontFamily: 'Montserrat-Bold',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 12,
      color: '#6E7989',
    },
    gramText: {
      // fontFamily: 'Montserrat-ExtraBold',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 10,
      color: '#ffffff', 
      textAlign: 'center'
    },
    RupeesText:{
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12,
      color: '#054AA5', 
    },
    gramContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    gramContainer1:{
     backgroundColor: '#054AA5',
     height: 15,
     padding: 2,
     paddingHorizontal: 4,
     borderRadius: 3,
    },
    rupeesContainer: {
      marginTop: 35,
    },
    headerIcon: {
      height: 20,
      width: 20,
    },
    categoriesImage: {
      height: 60,
      width: 60,
    },
    imageText:{
      color: '#99A0B0',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 7,
    },
    imagesArea:{
      paddingHorizontal: 10,
    },
    heartIcon:{
      height: 15,
      width: 15,
    }  
});