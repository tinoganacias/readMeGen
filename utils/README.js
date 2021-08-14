   function README(data) {
    return `${data.title}

# Description

${data.description}

badge

![badge](https://img.shields.io/badge/License-${data.badge}-yellow.svg)

# Table of Contents


* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Badge](#badge)
* [Contributions](#contributions)
* [Test](#test)
* [Features](#features)
* [GitHub URL](#githuburl)
* [Deployed URL](#deployedurl)
* [GitHub Username](#githubusername)
* [Email](#email)

## installation

${data.installation}

## Usage
    
${data.usage}

## contributions
    
${data.contributions}
    
## test
    
${data.test}    

## features
    
${data.features}

# Find Project    

#### githuburl:
    
${data.githuburl}

#### deployedurl:
    
${data.deployedurl}

## Questions:

#### githubusername
    
${data.githubusername}

## If you have any additional questions, please contact:

#### email
    
${data.email}`;}



module.exports = README;