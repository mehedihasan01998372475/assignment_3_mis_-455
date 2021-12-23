$(document).ready(function(){

	$('.search_btn').click(function(){

		let inputdata = $('.input_search').val().trim();

		fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputdata}`)
		.then(response => response.json())
		.then(data =>{

			let html = ""

			if(data.meals){

				$('.no_data').html('')

				data.meals.forEach(meal =>{

					html+= `

					<div style="box-shadow: 0 4px 15px rgba(0,0,0,0.5); border-radius: 10px;" class="col-lg-4 my-3">
                    
                    <img class="img-fluid" src="${meal.strMealThumb}">

                    <div class="text-center my-3">
                        
                        <h3>${meal.strMeal}</h3>

                        <button class="btn btn-danger mt-4">Click Now</button>

                    </div>

                </div>

					`

				})

			}else{

				$('.no_data').html('No Data Found')
			}


			$('.meals_content_data').html(html)



		})
	

	})

})