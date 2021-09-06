import './SideDrawer.scss';
/* Crear la vista del hamburguer menu */

const SideDrawer = (props) => {
    const {sideToogle} = props;
    const sideDrawerClass = ["sideDrawer"];
    if(sideToogle){
        sideDrawerClass.push("sideToogle")
    }
    return (
        <div  className={sideDrawerClass.join(" ")}></div>
    );
}

export default SideDrawer;
