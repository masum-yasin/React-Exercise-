<?php 
    
    require 'db_connection.php';
    $abc = json_decode(file_get_contents("php://input"));

    if(isset($abc->data->user_name) && !empty($abc->data->user_name) 
    && isset($abc->data->mobile) && !empty($abc->data->mobile) 
    && isset($abc->data->service_name) && !empty($abc->data->service_name)
    && isset($abc->data->price) && !empty($abc->data->price)
    ){
        $user_name =  $abc->data->user_name;
        $mobile =  $abc->data->mobile;
        $service_name =  $abc->data->service_name;
        $price =  $abc->data->price;
       
        // $phone = $abc->data->phone;
        // $subject = $abc->data->subject;
        // $state = $abc->data->state;
        // $date = $abc->data->date;
        // $address = $abc->data->address;
        			

       

        $sql = "INSERT INTO booking_tb VALUES(NULL, '$user_name', '$mobile', '$service_name', '$price' )";
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