import { useHttp } from "../hooks/http.hook";


const useCoffeeService = () => {
    const {loading, request, error} = useHttp();
    

    const getAllCoffee = async () => {
        const res = await request('http://localhost:3000/coffee');
        return res
        // return res.map(_transformCoffee);
    }

    const getCoffee = async (id) => {
        const res = await request('http://localhost:3000/coffee');
        return res.coffee[0];
    }

    // const _transformCoffee = (coffee) => {
    //     return {
    //         id: coffee.id,
    //         img: coffee.img,
    //         altimg: coffee.altimg,
    //         title: coffee.title,
    //         country: coffee.country,
    //         descr: coffee.descr,
    //         price: coffee.price
    //     }
    // }

    return {getAllCoffee, getCoffee, loading, error };
}

export default useCoffeeService;