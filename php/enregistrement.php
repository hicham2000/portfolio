<?php
include ("connexion.php");
$name=$_POST["name"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$subject=$_POST["subject"];
$message=$_POST["message"];
$sql="insert into ownsite (name,email,phone,subject,message)
values ('$name','$email','$phone','$subject','$message')";
$resultat=mysqli_query($link,$sql);


?>