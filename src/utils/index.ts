// Generate an array of products with a given amount using map
export function generateFakeProducts(amount: number) {
  let numbers = Array.from({ length: amount }, (x, i) => i + 1);
  let products = numbers.map((number) => {
    let name = 'Product ' + number;
    let description = 'This is a description of ' + name;
    let logo = 'https://placehold.co/50x50?text=' + name;
    let date_release = new Date(2023, 8, 1);
    let date_end = new Date(2024, 7, 31);
    let date_diff = date_end.getTime() - date_release.getTime();
    let date_random = new Date(
      date_release.getTime() + Math.random() * date_diff,
    );

    let date_revision = new Date(date_random.getTime());
    date_revision.setMonth(date_revision.getMonth() + 1);

    return {
      id: number.toString(),
      name: name,
      description: description,
      logo: logo,
      date_release: date_release,
      date_revision: date_revision,
    };
  });

  return products;
}
