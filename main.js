const LinksSocialMedia = {
    github: 'sdrashen',
    youtube: 'sabrinadrashen',
    facebook: 'sabrinadrashen',
    instagram: 'sabrina.drashen',
    twitter: 'StarDrashen'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

        alert(li.children[0].href)
    }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.githb.com/users/${LinksSocialMedia.github}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}
getGitHubProfileInfos()