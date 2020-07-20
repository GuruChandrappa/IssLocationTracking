using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TrackIssApi.Contract
{
    public class IssLocation
    {
        public string Timestamp { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
        public string Message { get; set; }

    }
}
