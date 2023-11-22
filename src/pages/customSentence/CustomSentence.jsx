import ListBox from "../../components/listBox/ListBox";
import Toggle from "../../components/toggle/Toggle";
// import Loading from "../../components/loading/Loading";

//category페이지에서 props 받아와서 ListBox에 넘겨주기 
function CustomSentence(props){
    return(
        <>
        <Toggle/>
        <ListBox gender="false" category="혼자살기"/>
        {/* <Loading/> */}
        </>
    )
}
export default CustomSentence;