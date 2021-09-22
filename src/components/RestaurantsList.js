import React, {useState} from "react";
import {RestaurantCard} from "./RestaurantCard";
import { useGetRestaurant } from "../service/RestaurantService";
import {CreateRestaurant} from "./CreateRestaurant";
import {CardGroup, Form, FormControl} from "react-bootstrap";
import {useGetUser} from "../service/UserService";

export const RestaurantsList = (props) =>{

    const {loading, data} = useGetRestaurant()
    const [search, setSearch] = useState("")
    const user = useGetUser(localStorage.getItem("userId"))



    const handleChange = (e)=>{
        setSearch(e.target.value)
        console.log(search)
    }

    return(
        <div className={"w-100"}>

            {user.data.role==="ROLE_ADMIN" && <CreateRestaurant type={"create"} info={{}}/>}
            <Form style={{margin: "30px"}}>
                <FormControl
                    type="search"
                    name="search"
                    className={"w-25"}
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleChange}
                />
            </Form>
            <br/>
            {loading && <p>loading...</p>}
            {data && data.length>0 && data.map((current)=> { if(current.name.toLowerCase().includes(search.trim().toLowerCase())) return <RestaurantCard key={current.id} info={current} />; else return null })}

        </div>

    )
}
