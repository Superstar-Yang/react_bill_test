import React from 'react';
import Article from "./article/article.jsx";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const navigate  = useNavigate()
    return (
        <div>
            我是login页面
            {/*声明式的写法*/}
            <Link to='/article/article'> 跳转到文章页 </Link>
            {/* 命令式的写法*/}
            <button onClick={()=>navigate('/article')}>跳转到文章页</button>
        </div>
    );
};

export default Login;