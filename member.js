function skillsMember() {
  return {
    name: 'member',
    skills: ['coding', 'debugging', 'testing'],
    showSkills: function() {
      this.skills.forEach(function(skill) {
        console.log(skill);
      });
    }
  };
}