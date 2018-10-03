function pillars(num_pill, dist, width) {
    if(
        num_pill != 1
    )
    {
    var centi_dist = dist * 100;
    var total_pill_width = width*(num_pill-2);
    var total_dist = centi_dist*(num_pill-1);
    console.log(total_pill_width+total_dist + ' cm')
    return total_pill_width+total_dist;
    
    }
  
    return 0
  }

  pillars(2, 20, 25);
  pillars(5, 10, 4);
  pillars(7, 100, 8);
  pillars(45, 1, 28);
  pillars(1, 2, 3);
