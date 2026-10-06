import User from "./User";

export default function UserList({ users }){

    return(
        <section className="grid">
        {users.map(users => (
            <User key={users.id} name={users.name} title={users.title} mail={users.mail} image={users.image} />
         ))}
        </section>
    );
} 