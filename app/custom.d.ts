interface Window {
  BookingToolIframe: {
    initialize: (options: {
      url: string;
      baseUrl: string;
      target: string;
    }) => void;
  };
}