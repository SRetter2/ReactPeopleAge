using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactPeopleAge.Data;

namespace ReactPeopleAge.Web.Models
{
    public class PeopleAgeRange
    {
        public List<Person> Ten {get;set;}
        public List<Person> Twenty { get; set; }
        public List<Person> Thirty { get; set; }
        public List<Person> Fourty { get; set; }
        public List<Person> Fifty { get; set; }
        public List<Person> Sixty { get; set; }
        public List<Person> Seventy { get; set; }
        public List<Person> Eighty { get; set; }
        public List<Person> Ninety { get; set; }
        public List<Person> Hundred { get; set; }
    }
}
