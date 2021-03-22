import React from 'react';

import whatsApp from '../../assets/images/icons/whatsapp.svg';

import './style.css';
import api from '../../assets/services/api';


export interface Teacher{
    avatar:string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subjec: string,
    whatsapp: string,
};

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem:  React.FC<TeacherItemProps> = ({teacher}) => {

    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Jhonatan Willian"/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subjec}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>   


            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost},00</strong>
                </p>    
                <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsApp} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>    
        </article>

    )
}

export default TeacherItem;