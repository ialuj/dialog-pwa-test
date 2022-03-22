import React, { useEffect, useState } from 'react';

import axios from 'axios';

import User from "../models/User";

import ProfileResume from './ProfileResume';

import SearchedUserCard from './SearchedUserCard';

import TitleComponent from './TitleComponent';

import '../css/App.css';

const App = () => {

    let [users, setUsers] = useState<User []>([]);

    let [searchUsers, setSearchUsers] = useState<User []>([]);

    let [searchUserFriends, setSearchUserFriends] = useState<User []>([]);

    useEffect(() => {
        axios({
            url: `http://localhost:4000/graphql`,
            method: 'post',
            data: {
              query: `
                 {
                  users{
                    _id,
                    name,
                    age,
                    eyeColor,
                    company,
                    email,
                    picture,
                    friends {
                        _id,
                        name,
                        age,
                        eyeColor,
                        company,
                        email,
                        picture
                            }
                        }
                 }
                `
            }
          }).then((result) => {
              const list: User[] = result.data.data.users;

              setUsers(list.filter(user => user.age>0));
          });
    }, []);

    const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
        
        e.preventDefault();

        if(users.length>0){
            
        const userList: User [] = users.filter(user => user.name.toLowerCase() === e.currentTarget.value.toLowerCase());

        if(userList.length>0){
            setSearchUsers(userList);
            setSearchUserFriends(userList[0].friends)
        }
        else {
            setSearchUsers([]);
            setSearchUserFriends([])
        }
    }
    }

        return(
                <div>

                <div className="wrapper">
                <TitleComponent />
                <input type="search" placeholder="search..." className="search" onChange={handleSearchInput} />
                </div>

                <div className="wrapper">
                {searchUsers.length!==0? <SearchedUserCard _id={searchUsers[0]._id} name={searchUsers[0].name} age={searchUsers[0].age} 
                            eyeColor={searchUsers[0].eyeColor} company={searchUsers[0].company}  email={searchUsers[0].email} 
                            picture={searchUsers[0].picture} friends={searchUsers[0].friends}  key={searchUsers[0]._id} />: <></>}
                </div>
                {searchUserFriends.length>0?
                <div>
                    <span className="span">Friends:</span>
                </div>:<></>
                }
                <div className="wrapper">
                    {
                            searchUserFriends.length>0?
                            searchUserFriends.map(u => {
                                return <ProfileResume _id={u._id} name={u.name} age={u.age} eyeColor={u.eyeColor} company={u.company} 
                                        email={u.email} picture={u.picture} friends={u.friends}  key={u._id} />
                                }):
                                users.map(u => {
                                    return <ProfileResume _id={u._id} name={u.name} age={u.age} eyeColor={u.eyeColor} company={u.company} 
                                            email={u.email} picture={u.picture} friends={u.friends}  key={u._id} />
                                    })
                    }
                </div>
                </div>
        )
}

export default App;