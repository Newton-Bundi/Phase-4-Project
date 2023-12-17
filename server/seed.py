from app import app
from models import db, Pet

with app.app_context():

    buddy = Pet(
          id= 1,
          name= "Buddy",
          pet_type= "Dog",
          breed= "Labrador Retriever",
          price= 500,
          is_adopted= False,
          color= "Golden",
          image_URL= "https=//images.unsplash.com/photo-1561495376-dc9c7c5b8726?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          age= 2,
          owner_id= "ABC123",
    )
    rocky = Pet(
          id= 2,
          name= "Rocky",
          pet_type= "Dog",
          breed= "German Shepherd",
          price= 600,
          is_adopted= False,
          color= "Black and Tan",
          image_URL= "https=//images.unsplash.com/photo-1619980296991-5c0d64b23950?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          age= 3,
          owner_id= "GHI789",
    )
    luna = Pet(
          id= 3,
          name= "Luna",
          pet_type= "Dog",
          breed= "Poodle",
          price= 600,
          is_adopted= False,
          color= "White",
          image_URL= "https=//www.southernliving.com/thmb/mF4LmyNA32KAxr2Xm0oSPvOfB8g=/750x0/filters=no_upscale()=max_bytes(150000)=strip_icc()=format(webp)/GettyImages-650044139-2000-1671d5d378504f989210a2e22ae6a203.jpg",
          age= 3,
          owner_id= "GHI789",
    )
    cooper = Pet(
          id= 4,
          name= "Cooper",
          pet_type= "Dog",
          breed= "Dachshund",
          price= 600,
          is_adopted= False,
          color= "Black and Tan",
          image_URL= "https=//cdn.pixabay.com/photo/2023/04/07/05/10/dog-7905519_1280.jpg",
          age= 3,
          owner_id= "GHI789",
        )
  
    fin = Pet(
          id= 5,
          name= "Finn",
          pet_type= "Dog",
          breed= "Rotweiller",
          price= 750,
          is_adopted= False,
          color= "Black and brown",
          image_URL= "https=//ntbrand-wp.s3.amazonaws.com/mystart/wp-content/uploads/2020/03/12150859/My_Rotweiller_00-1170x781.jpeg",
          age= 2,
          owner_id= "ABC123",
        )
  
    lexi = Pet(
          id= 6,
          name= "Lexi",
          pet_type= "Dog",
          breed= "Bulldog",
          price= 800,
          is_adopted= False,
          color= "Brown and white",
          image_URL= "https=//cdn.akc.org/BulldogPup_BlogHeader.jpg",
          age= 2,
          owner_id= "ABC123",
        )
    max = Pet(
          id= 7,
          name= "Max",
          pet_type= "Dog",
          breed= "Golden Retriever",
          price= 550,
          is_adopted= True,
          color= "Beige",
          image_URL= "https=//as1.ftcdn.net/v2/jpg/01/68/93/76/1000_F_168937669_flXieX0V8ztmBWYZELyJfCJps0RyYXB3.jpg",
          age= 2,
          owner_id= "JKL012",
        )
    charlie = Pet(
          id= 8,
          name= "Charlie",
          pet_type= "Dog",
          breed= "Beagle",
          price= 400,
          is_adopted= True,
          color= "Tri-color",
          image_URL= "https=//images.unsplash.com/photo-1534985111090-85c477f9d813?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWdsZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
          age= 1,
          owner_id= "MNO345",
        ),
  
    ollie = Pet(
          id= 9,
          name= "Ollie",
          pet_type= "Dog",
          breed= "Japanese-Spitz",
          price= 300,
          is_adopted= True,
          color= "White",
          image_URL= "https=//a-z-animals.com/media/2021/08/Japanese-spitz-running.jpg",
          age= 3,
          owner_id= "MNO345",
        )

    db.session.add_all([ollie,charlie,max,lexi,fin,luna,rocky,buddy,cooper])
    db.session.commit()