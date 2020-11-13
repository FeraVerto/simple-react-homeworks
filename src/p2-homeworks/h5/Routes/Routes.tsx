import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "../pages/PreJunior/PreJunior";
import Error404 from "../pages/Error404/Error404";
import Jun from "../pages/Jun/Jun";
import JunPlus from "../pages/JunPlus/JunPlus";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUN: "/jun",
    JUN_PLUS: "/jun-plus"
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совпадение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>

                <Route exact path={PATH.JUN} render={() => <Jun/>}/>
                <Route exact path={PATH.JUN_PLUS} render={() => <JunPlus/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch></div>
    );
}

export default Routes;
