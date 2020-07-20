using Newtonsoft.Json.Linq;
using System.Net;
using TrackIssApi.Contract;

namespace TrackIssApi.IssApi
{
    public static class Iss
    {
        public const string ISS_URL = @"http://api.open-notify.org/iss-now.json";  

        public static IssLocation GetCurrentIssLocation()
        {
            using (WebClient wc = new WebClient())
            {
                var json = wc.DownloadString(ISS_URL);

                return GetIssLocation(json);
            }
        }

        public static IssLocation GetIssLocation(string json)
        {
            JObject jObject = JObject.Parse(json);
            return new IssLocation()
            {
                Longitude = jObject["iss_position"]["longitude"].ToString(),
                Latitude = jObject["iss_position"]["latitude"].ToString(),
                Timestamp = jObject["timestamp"].ToString(),
                Message = jObject["message"].ToString()

            };
        }

    }
}
