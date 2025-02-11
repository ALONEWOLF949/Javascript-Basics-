const obj = {
    name: "Tousif Ahmed",
    age: 21,
    address: "SadiqAbad",
    number: 15,

    edu: {
        degree: "BSCSEC",
        CGPA: "282",
        institute: "KFUEIT"
    },

    skill: {
        lang: "Java, Dart",
        tools: "hydra, Metasploit, Nmap, Wireshark",
        skills: "network scanning, vulnerability assessment, SOC L1"
    }
};
console.log(",  Name: ", obj.name, ",  Age: ",obj.age,",  Address: ",obj.address, ",  Number: ",obj.number, ",  Degree: ",obj.edu.degree, ",  CGPA: ",obj.edu.CGPA, ",  Institute: ",obj.edu.institute, ",  Languages:" ,obj.skill.lang, ",  Tools: " ,obj.skill.tools, ",  Skills: " ,obj.skill.skills);
