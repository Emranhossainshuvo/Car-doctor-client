import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {

    const service = useLoaderData();
    const { title, price, _id, img } = service || {};
    const { user } = useContext(AuthContext)

    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const amount = form.amount.value;
        const date = form.date.value;
        const checkout = {
            name,
            email,
            amount,
            date,
            img,
            service: title,
            service_id: _id
        }
        console.log(checkout);
        fetch('http://localhost:5000/checkouts', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(checkout)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('completed')
            }
        })
    }

    return (
        <div>
            <h2 className="text-2xl text-center">CheckOut: {title}</h2>

            <form onSubmit={handleCheckOut} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" name="amount" defaultValue={'$ ' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block bg-rose-400 hover:bg-rose-300" type="submit" value="Confirm order" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;