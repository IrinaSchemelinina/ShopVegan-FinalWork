<?php
    if( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) == ''){
        header("Location: office.html");
        exit;
    }
?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShopVegan</title>
    <style>
        h2 { 
            font-family: 'Rosario', sans-serif;
            font-size: 40px;
            line-height: 50px;
            color: #222222;
        }

        .btn-logout {
            font-size: 18px;
            background-color: #09A66D;
            border: 1px solid #09A66D;
            color: #fff;
            padding: 10px 20px;
        }
    </style>
</head>

<body>

        <h2>Страница Пользователя</h2>
        <button class="btn-logout" id="logout">Выйти из личного кабинета</button>
   
    <script src="/js/logout.js"></script>
      
</body>
</html>