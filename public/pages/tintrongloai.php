           
  <?php
            $idLT = $_GET["idLT"];
            settype($idLT,"int");
             $theloaitin = TheLoaiTin($idLT);
           while ( $row_theloaitin = mysql_fetch_array($theloaitin) )
            {
          
  ?> 
                <div class="box-cat">
                	<div class="cat1">
                    	
                        <div class="clear"></div>
                        <div class="cat-content">
                        	<div class="col0 col1">
                            	<div class="news">
                                    <h3 class="title" ><a href="index.php?p=chitiettin&idTin=<?php echo $row_theloaitin["idTin"] ?>"> <?php echo $row_theloaitin['TieuDe'] ?> </a></h3>
                                    <img class="images_news" src="upload/tintuc/<?php echo $row_theloaitin['urlHinh'] ?>" align="left" />
                                    <div class="des"><?php echo $row_theloaitin['TomTat'] ?></div>
                                    <div class="clear"></div>
                                   
                				</div>
                            </div>
                        </div>
                    </div>
                </div>
 <?php 
    } // đóng while
 ?>   