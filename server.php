<?php
header('Content-Type: application/javascript');
$db_username = "sdasd"; //Database Username
$db_password = "adasdas"; //Database Password
$host_name = "localhost"; //Mysql Hostname
$db_name = 'asdasdas'; //Database Name
$jsonp=$_GET['callback'];
$mysqli = new mysqli($host_name, $db_username, $db_password, $db_name);
if ($mysqli->connect_error) {
    printf("%s(%s)", $jsonp, json_encode(array('status'=>'error','reason'=>'Server error.')));
}

if(isset($_GET['unique_code']) && !empty($_GET['unique_code']) && isset($_GET['domain']) && !empty($_GET['domain']) && isset($_GET['callback'])){
  $unique_code=$_GET['unique_code'];
  $domain=$_GET['domain'];
 
  $statement=$mysqli->prepare('select * from `test` where unique_code=? AND domain=?');
  $statement->bind_param('ss',$unique_code,$domain);
  if(!$statement->execute())
  printf("%s(%s)", $jsonp, json_encode(array('status'=>'error','reason'=>'server error.')));
  $result=$statement->get_result();
  if(mysqli_num_rows($result)>0)
  printf("%s(%s)", $jsonp, json_encode(array('status'=>'success')));
  else printf("%s(%s)", $jsonp, json_encode(array('status'=>'error','reason'=>'Unique code/Domain error.')));
}else{
  printf("%s(%s)", $jsonp, json_encode(array('status'=>'error','reason'=>'Unique code/Domain error.')));
}
 ?>
