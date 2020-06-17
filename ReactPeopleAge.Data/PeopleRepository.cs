using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReactPeopleAge.Data
{
     public class PeopleRepository
    {
        private readonly string _connectionString;

        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetPeople()
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.People.ToList();
            }
        }

        public void Add(Person person)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.People.Add(person);
                context.SaveChanges();
            }
        }
        public void AddPeople(List<Person> ppl)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.People.AddRange(ppl);
                context.SaveChanges();
            }
        }


    }
}

