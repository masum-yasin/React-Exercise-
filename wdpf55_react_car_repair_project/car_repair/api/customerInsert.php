<?php 
    
    require 'db_connection.php';

    $abc = json_decode(file_get_contents("php://input"));

    if(isset($abc->data->name) && !empty($abc->data->name) && isset($abc->data->email) && !empty($abc->data->email) && isset($abc->data->phone) && !empty($abc->data->phone) && isset($abc->data->subject) && !empty($abc->data->subject) && isset($abc->data->state) && !empty($abc->data->state) && isset($abc->data->address) && !empty($abc->data->address)){
        $name =  $abc->data->name;
        $email =  $abc->data->email;
        $phone = $abc->data->phone;
        $subject = $abc->data->subject;
        $state = $abc->data->state;
        // $date = $abc->data->date;
        $address = $abc->data->address;

       

        $sql = "INSERT INTO customers VALUES(NULL, '$name', '$email','$phone','$address','$state', now(),'$subject')";
    $db->query($sql);

    if($db->affected_rows>0){
        echo json_encode(["msg"=>"Successfully Inserted"]) ;
    } else {
        echo json_encode(["msg"=>"Problem"]) ;
    }
    } else {
        echo json_encode(["msg"=>"Empty Not allowed"]) ;
    }






?>