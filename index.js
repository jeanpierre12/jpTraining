fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json => {
            json.forEach(country => {
                var content = `
                        <div class="icon"><i class="bi bi-calendar4-week"></i></div>
                        <h4 class="title"><a href="">${country.name.common}</a></h4>
                        <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                        `;
                
                var div= document.createElement('div')
                div.innerHTML = content;
                div.className= 'col-lg-4 col-md-6 icon-box'
                document.getElementById('ServicesRow').appendChild(div);   
            });
        });