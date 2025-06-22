import { auth } from "@/auth";

export default async function Weather() {
  const session = await auth();

  try {
    var result = await fetch("https://localhost:7135/weatherforecast", {
      headers: { Authorization: `Bearer ${session?.accessToken}` },
    });

    var weather = await result.json();
    return (
      <>
        <ul>
          {weather.map((forecast: any) => (
            <li key={forecast.date}>
              <p>
                {forecast.date}: {forecast.temperatureC}°C
              </p>
              <p>{forecast.summary}</p>
            </li>
          ))}
        </ul>
      </>
    );
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return <p>Error fetching weather data.</p>;
  }
}
