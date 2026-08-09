document.addEventListener('DOMContentLoaded', ()=>{
    const inputText = document.getElementById('inputText')
    const searchBtn = document.getElementById('searchBtn')
    const displayName = document.getElementById('name')
    const followersCount = document.getElementById('followersCount')
    const followingCount = document.getElementById('followingCount')
    const bioshow = document.getElementById('bioShow')
    const pub_rep = document.getElementById('pub_rep')
    const error_msg = document.getElementById('errorMessage')
    const user_details = document.getElementById('userDetails')
    
    searchBtn.addEventListener('click', async()=>{
        let inputData = inputText.value.trim()
        if (!inputData) return 


        try {
            const userData = await fetchData(inputData)
            displayData(userData)
        } catch (error) {
            error_msg.classList.remove('hidden')
            user_details.classList.add('hidden')
        }

    })

    async function fetchData(inputData){
        const url = `https://api.github.com/users/${inputData}`
        
        const response = await fetch(url)

        if (!response.ok){
            throw new Error("No User Found");
            
        }
        const data = await response.json()
        return data
    }

    function displayData(data){
        const {name,followers,following,bio,public_repos,} = data
        displayName.textContent = `Name: ${name}`
        followersCount.textContent = `Followers: ${followers}`
        followingCount.textContent = `Following: ${following}`
        bioshow.textContent = `Bio: ${bio}`
        pub_rep.textContent = `Public Repos: ${public_repos}`
        user_details.classList.remove('hidden')
        error_msg.classList.add('hidden')
        

        
        
        
    }
})