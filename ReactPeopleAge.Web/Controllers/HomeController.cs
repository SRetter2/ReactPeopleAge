using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleAge.Data;
using ReactPeopleAge.Web.Models;

namespace ReactPeopleAge.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private string _connectionString;
        public HomeController(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("ConStr");
        }
        private List<Person> GetPeople()
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetPeople();
        }
        [HttpGet]
        [Route("getall")]
        public List<Person> GetAllPeople()
        {
             return GetPeople();
        }
        [HttpPost]
        [Route("addrange")]
        public void AddPeopleRange(AgeRangeViewModel vm)
        {
            var ppl = new List<Person>();
            for( int i = 1; i < vm.Amount; i++)
            {
                ppl.Add(new Person
                {
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Age = Faker.RandomNumber.Next(vm.Min, vm.Max)
                });
            }
            var repo = new PeopleRepository(_connectionString);
            repo.AddPeople(ppl);
        }
        [HttpPost]
        [Route("addperson")]
        public void AddPerson(AddPersonViewModel vm)
        {
            var person = new Person
            {
                FirstName = vm.FirstName,
                LastName = vm.LastName,
                Age = (DateTime.Now - vm.Birthday).Days/365
            };
            var repo = new PeopleRepository(_connectionString);
            repo.Add(person);
        }
    }
}