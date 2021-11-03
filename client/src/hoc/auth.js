import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {

    //null => 아무나 출입 가능
    //true => 로그인한 유저만 출입 가능
    //false => 로그인한 유저는 출입 불가능
    function AuthenticationCheck(props) {

        const dispatch = useDispatch()

        useEffect(() => {

            dispatch(auth()).then(res => {
                console.log(res)

                //로그인하지 않은 상태
                if(!res.payload.isAuth) {
                    if(option === true) { //로그인이 필요한 페이지 접근하면
                        props.history.push('/login')
                    }
                } else {
                    //로그인한 상태
                    if(adminRoute && !res.payload.isAdmin) {//어드민이 아닌 유저가 어드민으로 갈려고 할때
                        props.history.push('/')
                    } else {
                        if(option === false) { //로그인하면 출입불가능한 페이지 접근하면
                            props.history.push('/')
                        }
                    }
                }
            })

        }, [])

        return (
            <SpecificComponent/>
        )

    }

    return AuthenticationCheck
}